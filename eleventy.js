const Eleventy = require('@11ty/eleventy')

module.exports = async opts => {
	const {
		input,
		output,
		config,
		pathprefix,
		dryrun,
		incremental,
		passthroughall,
		formats,
		quiet,
		serve,
		port,
		watch
	} = opts

	const elev = new Eleventy(input, output)
	elev.setConfigPathOverride(config)
	elev.setPathPrefix(pathprefix)
	elev.setDryRun(dryrun)
	elev.setIncrementalBuild(incremental)
	elev.setPassthroughAll(passthroughall)
	elev.setFormats(formats)
	elev.setIsVerbose(!quiet)

	await elev.init()

	if (serve) {
		await elev.watch()
		return elev.serve(port)
	} else if (watch) {
		return elev.watch()
	} else {
		return elev.write()
	}
}
