<p align="center">
  <img src="https://www.seven.io/wp-content/uploads/Logo.svg" width="250" alt="seven logo" />
</p>

<h1 align="center">seven Components for Appmixer</h1>

<p align="center">
  Collection of <a href="https://www.appmixer.com/">Appmixer</a> components for sending SMS, placing voice calls and running phone-number lookups via the seven gateway.
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-teal.svg" alt="MIT License" /></a>
  <img src="https://img.shields.io/badge/Appmixer-component-blue" alt="Appmixer component" />
  <img src="https://img.shields.io/badge/Node.js-14%2B-brightgreen" alt="Node.js 14+" />
</p>

---

## Prerequisites

- An [Appmixer](https://www.appmixer.com/) account and the [`appmixer` CLI](https://docs.appmixer.com/appmixer/developing-bundles)
- A [seven account](https://www.seven.io/) with API key ([How to get your API key](https://help.seven.io/en/developer/where-do-i-find-my-api-key))

## Installation

```bash
git clone https://github.com/seven-io/appmixer.git
cd appmixer/appmixer.seven/appmixer/seven
appmixer publish
```

## Configuration

Provide your seven API key as an environment variable to the Appmixer worker:

```bash
export SEVEN_API_KEY=<your-key>
```

Alternatively configure it per Appmixer flow connection.

## Support

Need help? Feel free to [contact us](https://www.seven.io/en/company/contact/) or [open an issue](https://github.com/seven-io/appmixer/issues).

## License

[MIT](LICENSE)
