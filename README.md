# Constants and Utilities

_Consumable constants and helpers for clients and servers to help mitigate the [magic string problem](https://en.wikipedia.org/wiki/Magic_string)._

<table>
    <tr>
        <td>
            <a src="https://github.com/semantic-release/semantic-release">
                <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" />
            </a>
        </td>
    </tr>
</table>

<p align="center">
  <img src="./assets/logo.svg" width="300" title="Ready for Launch">
</p>

## Contributing

### Organization

This project is organized in a very _flat_ structure to enable simple discoverability.

### Development

There's nothing to run. Just write code and tests.

### Building

We use [Rollup](https://rollupjs.org/guide/en/)

### Committing

This project uses [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) and as such, has specific committing guidelines. **Your commit will be rejected if you do not adhere to these guidelines.**

For the smoothest development experience, once your code is staged, commit with:

```bash
npm run commit
```

This will trigger [commitizen](https://github.com/commitizen/cz-cli) prompts to help you write effective, compliant commit messages.

### Tests

Running the tests is super simple. We use [Jest](https://jestjs.io/en/) for testing.

```bash
# Run the tests once (for CI)
npm run test

# Run the tests in watch mode (for development)
npm run test:watch
```

### Releases

We use [semantic-release](https://github.com/semantic-release/semantic-release) to manage GitHub and NPM releases. The `semantic-release` commands will automatically generate tags, releases, and a [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) CHANGELOG with one command.

The releases will happen in response to merged PRs on this Repo and should not be triggered locally.

**If you know what you're doing** and really want to trigger a release to GitHub and NPM on your local machine, you can run:

```bash
npm run release -- --no-ci
```

You'll notice that we do not have to specify the specific type of version upgrade `(patch|minor|major)`. Semantic-release will automatically parse our conventional commit messages and generate the proper semantic version upgrade for us.

## License

MIT © [masiamj](https://github.com/masiamj)
