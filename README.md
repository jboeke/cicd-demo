# CI/CD Node App

This is a sample app created for the [January 2022 FCIP meetup](https://www.meetup.com/goFCIP/events/273935663/). 

It consists of a very basic and poorly tested [Express API](https://expressjs.com/) that is fed by a [SQLite database](https://www.sqlite.org) to serve up slide content.

The content is read by a very simple and poorly tested [Vue.js](https://vuejs.org/) front end app.

I am an experienced developer, but a novice when it comes to Express and Vue. 

Use at your own risk.

---

# Resources

## Events

https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows

## Environments

https://github.com/actions/virtual-environments

https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners

https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions#minute-multipliers

### Matrix Build

https://docs.github.com/en/actions/learn-github-actions/managing-complex-workflows#using-a-build-matrix

## Actions

https://github.com/marketplace?type=actions

#### Actions used in this repo

Checkout repo: https://github.com/marketplace/actions/checkout

Setup node: https://github.com/marketplace/actions/setup-node-js-environment

SCP Copy: https://github.com/marketplace/actions/copy-via-ssh

Upload artifacts: https://github.com/marketplace/actions/upload-a-build-artifact

Remote ssh commands: https://github.com/marketplace/actions/ssh-remote-commands

Monitoring via curl:  https://github.com/marketplace/actions/url-health-check

Send email via sendgrid: https://github.com/marketplace/actions/sendgrid-action

#### Bonus Actions

https://github.com/marketplace/actions/first-interaction

https://github.com/marketplace/actions/giphy-generator

#### Build your own

https://docs.github.com/en/actions/creating-actions

### Secrets

https://github.com/jboeke/cicdnodeapp/settings/secrets/actions

## Complex Workflows

https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph

https://docs.github.com/en/actions/using-workflows/reusing-workflows#creating-a-reusable-workflow

## Nobody's Pefect

Q: What if the requred steps stall with the `Expected — Waiting for status to be reported` message?

A: You can push and empty commit to re-trigger the required workflows with `git commit --amend --no-edit`
