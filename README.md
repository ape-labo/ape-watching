ape-watching
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![Dependency Status][bd_gemnasium_shield_url]][bd_gemnasium_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/ape-repo/ape-watching
[bd_travis_url]: http://travis-ci.org/ape-repo/ape-watching
[bd_travis_shield_url]: http://img.shields.io/travis/ape-repo/ape-watching.svg?style=flat
[bd_license_url]: https://github.com/ape-repo/ape-watching/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/ape-repo/ape-watching
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/ape-repo/ape-watching.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/ape-repo/ape-watching.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/ape-repo/ape-watching
[bd_gemnasium_shield_url]: https://gemnasium.com/ape-repo/ape-watching.svg
[bd_npm_url]: http://www.npmjs.org/package/ape-watching
[bd_npm_shield_url]: http://img.shields.io/npm/v/ape-watching.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

ape framework module for watching files.

<!-- Description End -->




<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "docs/readme/02.Usage.md.hbs" Start -->

<a name="section-docs-readme-02-usage-md"></a>
Usage
----

### Watch files.

```javascript
#!/usr/bin/env

var apeWatching = require('ape-watching');

apeWatching.watchFiles([
    'src/javascripts/**/*.js',
    'assets/javascripts/**/*.js'
], function (ev, filename) {
    /*...*/
});
```


<!-- Section from "docs/readme/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/ape-repo/ape-watching/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [ape-repo](https://github.com/ape-repo)
+ [nodeunit](https://www.npmjs.com/package/nodeunit)

<!-- Links End -->
