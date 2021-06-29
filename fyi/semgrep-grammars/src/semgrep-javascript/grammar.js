/*
  semgrep-javascript

  Extends the standard javascript grammar with semgrep pattern constructs.

  Semgrep metavariables are already valid javascript
  identifiers so we do nothing for them.

  Maintenance:

  - Most tests are not in the tree-sitter format, but are under
    /lang/javascript/test. To test the grammar, use:

      cd lang
      ./test-lang javascript

  - Some of the rules aren't really extended but were copy-pasted then edited.
    They may have to be updated more frequently. Tests should catch problems.
*/

const javascript_grammar = require('tree-sitter-javascript/grammar');

module.exports = grammar(javascript_grammar, {
  name: 'javascript',
});

// copy-pasted from the original grammar
function commaSep1(rule) {
  return seq(rule, repeat(seq(',', rule)));
}

// copy-pasted from the original grammar
function commaSep(rule) {
  return optional(commaSep1(rule));
}
