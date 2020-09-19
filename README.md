# An 11ty

# [WIP]: Still at `0.x` things are still broken.

Easiest way to start using an [11ty](https://www.11ty.dev/) site.

This part is a CLI tool that merges an `11ty` structured site with an `11ty`
structured template, and then builds the site using the `11ty` tool.

## How to Use

The fastest way to get started is to use `degit` to fetch
[an11ty/starter](https://github.com/an11ty/starter):

```bash
npx degit an11ty/starter my-site
cd my-site
npm install
npm run build
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

Your site content (and template/setting overrides) live inside the `site` folder.

The metadata about the site (such as title and author name) live inside the `site/_data/metadata.js` file.

Make some changes to the `site/index.md` file, then simply:

```bash
npm run dev
```

This will build the site and launch a local server to view your new site!

## Commands

Only a limited set of `11ty` commands are supported:

- **`an11ty build`** - Build the whole site into the output folder.
- **`an11ty dev`** - Build the whole site into the output folder, watch
	for changes (rebuild on change), and launch an HTTP server.

Flags available for all commands:

- **`--help`** - Get help on any of the commands.
- **`--input, -i`** - The input folder, this would be your site content. (Default: `site`)
- **`--output, -o`** - The output folder where the merged content goes. The
	built `11ty` output exists as a subfolder of this, named `_site`. (Default: `_copy`)
- **`--template, -t`** - *(Required)* The module name of your installed template.
- **`--templatePath, -T`** - If the template files are in a sub-folder, you will
	need to set the folder name here.

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
