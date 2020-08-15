# an11ty

Easiest way to start using an 11ty site.

## using it

Start a new site by making a repo with files in `site`,
for example: https://github.com/saibotsivad/fiddle-11ty-site

You'll also need a template to use, for example:
https://github.com/saibotsivad/fiddle-11ty-base

Then run the command:

```bash
TEMPLATE=saibotsivad/fiddle-11ty-base
npx a11ty build $TEMPLATE
```

The 11ty site will get built into `_copy/_site`
