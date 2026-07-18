# EnvGuard Node.js Example

A minimal Node.js template with EnvGuard configured for local development and pull requests.

## Use This Template

Create a repository from this template, then install and scan:

```bash
npm ci
npm run security:env
```

The scan uses the Node preset, masks detected values, and fails only for high or critical findings. The included GitHub Actions workflow runs the same policy on every pull request and push to `main`.

Start the example HTTP server with:

```bash
npm start
```

EnvGuard is a configuration security guardrail. Pair it with a git-history secret scanner for deeper secret discovery.

## Learn More

- [EnvGuard](https://github.com/bhargavmahanta/envGuard)
- [npm package](https://www.npmjs.com/package/@bhargavmahanta/envguard)
- [Rule catalog](https://github.com/bhargavmahanta/envGuard/blob/main/docs/rules.md)

## License

MIT
