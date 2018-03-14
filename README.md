<h2 align="center"><a href="https://github.com/Thomas-A-Reinert/WordPress-Developer-Checklist">WordPress-Developer-Checklist</a></h2>

<p align="center">
  <em>A user-friendly and fluid interface for using checklists.</em>
</p>
<!-- <p align="center">
    <a href="https://alexisdanizan.github.io" target="_blank" rel="noopener noreferrer">
        <img alt="Checklist tools website" title="Checklist tools website" src="https://github.com/AlexisDanizan/Checklist-Tools-Website/blob/master/data/checklist-tools.gif?raw=true" width="800">
    </a>
</p> -->


[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat-square)](https://opensource.org/licenses/Apache-2.0)
[![Build Status](https://travis-ci.org/Thomas-A-Reinert/WordPress-Developer-Checklist.svg?branch=master&style=flat-square)](https://travis-ci.org/Thomas-A-Reinert/WordPress-Developer-Checklist)
[![Last deployed](https://img.shields.io/github/last-commit/Thomas-A-Reinert/WordPress-Developer-Checklist/master.svg?label=last%20deployed&style=flat-square)](https://github.com/Thomas-A-Reinert/WordPress-Developer-Checklist/commits/master)
[![GitHub issues](https://img.shields.io/github/issues/Thomas-A-Reinert/WordPress-Developer-Checklist.svg?style=flat-square)](https://github.com/Thomas-A-Reinert/WordPress-Developer-Checklist/issues)

[![GitHub stars](https://img.shields.io/github/stars/Thomas-A-Reinert/WordPress-Developer-Checklist.svg?style=flat-square)](https://github.com/Thomas-A-Reinert/WordPress-Developer-Checklist/stargazers)
[![GitHub followers](https://img.shields.io/github/followers/espadrine.svg?style=flat-square&logo=github&label=Follow)](https://github.com/Thomas-A-Reinert/WordPress-Developer-Checklist/watchers)


**Project completion**

[![Prerequisites, Installation & Post-Install](https://img.shields.io/badge/Prerequisites%2C%20Installation%20%26%20Post--Install-80%25-yellowgreen.svg)]()
[![Development](https://img.shields.io/badge/Development-0%25-%23f00.svg)]()
[![Security](https://img.shields.io/badge/Security-0%25-%23f00.svg)]()
[![Performance](https://img.shields.io/badge/Performance-0%25-%23f00.svg)]()
[![Theme-Development](https://img.shields.io/badge/Theme--Development-0%25-%23f00.svg)]()
[![Plugin-Development](https://img.shields.io/badge/Plugin--Development-0%25-%23f00.svg)]()





**All the power of checklists, without the overhead:**
 - User-friendly and fluid interface
 - Fast build with [Preact](https://github.com/developit/preact) and [Bootstrap4](https://github.com/twbs)
 - Generate PDF report
 - Offline checklists storage with LocalStorage
 - Auto-save your progress
 - **Instant no-config app bundling**

Code based on the [Front-End Checklist by Alexis Danizan](https://github.com/AlexisDanizan/Checklist-Tools-Website)

### Use the online version: [wpchecklist.tarthemes.com/](https://wpchecklist.tarthemes.com/)


## Installation

<!-- **Install with npm**
```bash
npm i checklist-tools-website
```

**Install with Yarn**
```bash
yarn add checklist-tools-website
``` -->

**Install manually**

```bash
git clone https://github.com/Thomas-A-Reinert/WordPress-Developer-Checklist.git
yarn install
# or
npm install
```

## How to use ?

**Build with [Gulp](https://github.com/gulpjs/gulp)**
```bash
gulp build
```
Built files are available in `dist` folder.

## Customize

**Build and serve files with [Gulp](https://github.com/gulpjs/gulp)**
```bash
gulp build
gulp webserver
```

The version is available at [http://localhost:8080](http://localhost:8080)

### Add a new Checklist

#### Use the auto-converter

To convert a checklist to markdown format you can use the `bin/mdChecklistToJson.js` script.
To do this, add your checklist in `sample.md` and run the command **`npm mdtojson`**.  
The result of the conversion is in **`bin/sample.json`**. Modify your checklist until you get the result.

#### Add manually

Create a new json files in `src/checklist`.
Sample template:
```json
{
  "name": "Prerequisites, Installation & Post-Install",
  "description": "This checklist describes the WordPress installation prerequisites and installation process as well as post-install tasks.",
  "summary": "",
  "group_categories": [
    {
      "title_group": "WordPress Prerequisites",
      "categories": [
        {
          "title": "WordPress installation requirements",
          "tasks": [
            {
              "title": "Minimum hosting requirements",
              "explications":"Make sure your hosting plan at least supports the following setup. But you should make sure you fulfill the recommended setup. Note: Administrative tasks may consume much more memory!",
              "explicationlist": [
                {"explicationitem": "PHP 5.2.4 or greater"},
                {"explicationitem": "MySQL 5.0 or greater"},
                {"explicationitem": "Nginx or Apache with mod_rewrite module"},
                {"explicationitem": "Minimum 40MB memory allocated to PHP for a single sites (at least 64MB for multisite)"},
                {"explicationitem": "At least 60s PHP max execution time"},
                {"explicationitem": "HTTPS support"}
              ],
              "links": [
                {"path":"https://wordpress.org/about/requirements/",
                  "text":"WordPress.org - \"Requirements\"",
                  "type": "codex"},
                {"path":"https://codex.wordpress.org/Editing_wp-config.php#Increasing_memory_allocated_to_PHP",
                  "text":"WordPress.org - \"Increasing memory allocated to PHP\"",
                  "type": "codex"}
              ],
              "code":"",
              "priority": "high"
            },
          ]
        }
      ]
    }
  ]
}
```

To make the checklist available in app you need to modify `src/stores/checklistStore.js` 
and add `import example from '../checklist/example.json';`.

Next add it in INITIAL_DATA in `./src/checklistStore.js`:
```js
const INITIAL_DATA = {
  checklists: [
    example
  ],
  ...
};
```

## Troubleshooting

The new checklist does not appear in select:
 - Empty the localstorage before add a new checklist.
 
## Contributing

**Open an issue or a pull request to suggest changes or additions.**

### Guide

The **Checklist Tools Website** repository consists of two branches:

#### 1. `master`

This branch consists of the current stable branch of [WordPress-Developer-Checklist](https://github.com/Thomas-A-Reinert/WordPress-Developer-Checklist).

#### 2. `develop`

This branch will be used to make some significant changes to the structure, content if needed. It is preferable to use the master branch to fix small errors or add a new checklist.

## Support

## Author

**[Thomas A. Reinert](https://github.com/Thomas-A-Reinert/)**
<!-- 
## Contributors

This project exists thanks to all the people who contribute. -->

## License

Designed and created with ♥ by [Thomas A. Reinert](https://www.tarcgn.de/portfolio/). Licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0).