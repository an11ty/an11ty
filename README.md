# An11ty: An Eleventy Site

Easiest way to start using an [11ty](https://www.11ty.dev/) site.

An11ty is an opinionated merge tool, which merges one or more `11ty`
structured template folders together, with an `11ty` structured site,
and then builds the site using the `11ty` CLI tooling.

## How to Use

The fastest way to get started is probably to use `degit` to fetch
[an11ty/starter](https://github.com/an11ty/starter), which is a
simple starter website, using a single template:

```bash
npx degit an11ty/starter my-site
cd my-site
npm install
```

You'll notice that this starter project only has a very few
files in it:

```txt
.gitignore
package.json
README.md
site
  |- index.md
  |- _data
      |- metadata.js
```

Your site content (and any template/setting overrides) live inside
the `site` folder.

Like a normal `11ty` site, the metadata about the site (such as title
and author name) live inside the `site/_data/metadata.js` file.

To start development, simply run:

```bash
npm run dev
```

This will merge the template (from the `node_modules` folder) and the
site into `_merge`, and then build the site into `_site` and launch
a local server to view your new site!

(It will also watch the site folder and all template folders for any
changes, and then re-merge and re-build.)

## Commands

Because `an11ty` is meant to be a little more opinionated, it only
supportes a limited set of `11ty` commands:

- **`an11ty build`** - Build the whole site into the output folder.
- **`an11ty dev`** - Build the whole site into the output folder, watch
	for changes (rebuild on change), and launch an HTTP server.

Flags available for all commands:

- **`--help`** - Get help on any of the commands.
- **`--input, -i`** - The input folder, this would be your site content. (Default: `site`)
- **`--template, -t`** - *(Required)* The path to your installed template. You can
	specify multiple of these, and they will be merged one on top of the other,
	first to last.
- **`--merged, -m`** - The folder where the merged content goes. (Default: `_merged`)
- **`--output, -o`** - The folder where the built 11ty conten goes. (Default: `_site`)

Flags available for `dev` command:

- **`--port`** - The port to run the HTTP server. (Default: the `11ty` default, `8080`)

## Templates

> Check out [an11ty-template](https://github.com/saibotsivad/an11ty-template) for a
> great example template specially made for `an11ty`.

The `an11ty` command does a blind merge, copying the template folders
into a temporary folder and then copying anything in your site on top
of it, overwriting anything named the same.

Making an extensible template requires careful strategy, but you will likely
find that other existing templates will work with little extra effort.

For more notes on building a good template, have a look at
[an11ty-template](https://github.com/saibotsivad/an11ty-template).

## License

This software is published and released under the
[Very Open License](http://veryopenlicense.com).
