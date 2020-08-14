# a11ty

Easiest way to make an [11ty](https://www.11ty.io/) website.

**Highly opinionated** yet customizable to some degree.

Make a folder with some content and a configuration file, then run:

```bash
npx a11ty
```

Want to run a local server?

```bash
npx a11ty --serve
# or set a port
npx a11ty --serve --port=3000
```

If you're pushing it out to a provider, you configure that in your file (and probably add secrets and tokens as environment variables) and then run:

```bash
npx a11ty --deploy --stage=prod
```

## templates

Since this project is highly opinionated, it comes with a basic template that is reasonably professional looking.

You can stop right there and call it good.

Or you can make your own template and use it:

```bash
npx a11ty --template=$REPO
```
