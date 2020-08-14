#!/usr/bin/env node

const { existsSync, mkdirSync } = require('fs')
const { join } = require('path')

const degit = require('degit')
const eleventy = require('./eleventy.js')
const pkg = require('./package.json')
const reflect = require('@alumna/reflect')
const rimraf = require('rimraf')
const sade = require('sade')
const sh = require('shell-tag')

sade('a11ty', true)
	.version(pkg.version)
	.describe('Generate an 11ty site from a template.')
	.option('--in', 'Your 11ty site folder. Default: ./site')
	.option('--template', 'Repository of template to use. First tries: ./_template')
	.option('--serve', 'Start a server to view your site. Pass in value to override default. Default: 3000')
	.option('--watch', 'Rebuild site when changes are detected in input folder.')
	.action(async opts => {
		const cwd = process.cwd()
		const siteDir = opts.in || join(cwd, 'site')
		const templateDir = join(cwd, '_template')
		const copyDir = join(cwd, '_copy')
		const buildDir = join(cwd, '_build')

		opts.serve = opts.serve
			? (parseInt(opts.serve, 10) || 3000)
			: false

		// If the template directory exists, we'll just use
		// that directly. If it doesn't exist, we'll pull it
		// down using degit.
		if (!existsSync(templateDir)) {
			if (!opts.template) {
				throw 'either degit a template first or specify one'
			}
			console.log('Cloning template for first time using degit...')
			const emitter = degit(opts.template, {
				cache: true,
				force: true,
				verbose: true
			})
			emitter.on('info', info => {
				console.log('Degit:', info.message)
			})
			await emitter.clone(templateDir)
			console.log('Done cloning template.')
		} else {
			console.log('Using existing "_template" directory.')
		}

		// Make the output directory, then copy the template
		// contents into it, then merge the users contents into
		// it, overwriting things by name.
		rimraf.sync(copyDir)
		try {
			mkdirSync(copyDir)
		} catch (error) {
			if (error.code !== 'EEXIST') throw error
		}
		const out = await reflect({
			src: templateDir,
			dest: copyDir,
			// (OPTIONAL) Default to 'true'
			recursive: true,
			// (OPTIONAL) Default to 'true'
			// Delete in dest the non-existent files in src
			delete: true,
			// (OPTIONAL)
			// Array with files and folders not to reflect
			exclude: [
				'.git',
				'.github',
				'.git',
				'README.md'
			]
		})

		// If we are serving or watching, we can watch the input
		// folder for changes and copy over to the output folder.
		// From that point, the actual 11ty process should catch
		// the change.
		if (opts.serve || opts.watch) {
			console.log('-------------- also watch and build on changes')
			// watch this folder except exclude node_modules and .a11ty
			// on change copy the file to .a11ty
		}

		// console.log('------------------', await sh`pwd`)
		// console.log(await sh`PATH=$PATH:./node_modules/.bin && eleventy --input=./_copy --config=./_copy/.eleventy.js`)
		await eleventy({
			input: copyDir,
			output: buildDir,
			config: join('_copy', '.eleventy.js'),
			// configFunction,
			// pathprefix,
			// dryrun,
			// incremental,
			// passthroughall,
			// formats,
			// quiet,
			serve: !!opts.serve,
			port: opts.serve || undefined,
			watch: opts.watch || undefined
		})
	})
	.parse(process.argv)
	.catch(error => {
		console.log('------------------ ERROR --------------------')
		console.error(error)
	})
