Ext.data.JsonP.econda_recengine_Context({"tagname":"class","name":"econda.recengine.Context","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-econda.recengine.Context","members":{"cfg":[{"name":"category","tagname":"cfg","owner":"econda.recengine.Context","meta":{},"id":"cfg-category"},{"name":"productIds","tagname":"cfg","owner":"econda.recengine.Context","meta":{},"id":"cfg-productIds"}],"property":[{"name":"category","tagname":"property","owner":"econda.recengine.Context","meta":{"private":true},"id":"property-category"},{"name":"productIds","tagname":"property","owner":"econda.recengine.Context","meta":{"private":true},"id":"property-productIds"}],"method":[{"name":"setCategory","tagname":"method","owner":"econda.recengine.Context","meta":{"chainable":true},"id":"method-setCategory"},{"name":"setProductIds","tagname":"method","owner":"econda.recengine.Context","meta":{"chainable":true},"id":"method-setProductIds"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":9,"files":[{"filename":"Context.js","href":"Context.html#econda-recengine-Context"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Context.html#econda-recengine-Context' target='_blank'>Context.js</a></div></pre><div class='doc-contents'><p>Request context, e.g. the product we want to get recommendations for.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-category' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.recengine.Context'>econda.recengine.Context</span><br/><a href='source/Context.html#econda-recengine-Context-cfg-category' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.recengine.Context-cfg-category' class='name not-expandable'>category</a><span> : String|Array|Object|<a href=\"#!/api/econda.recengine.ContextCategory\" rel=\"econda.recengine.ContextCategory\" class=\"docClass\">econda.recengine.ContextCategory</a></span></div><div class='description'><div class='short'><p>Category, see <a href=\"#!/api/econda.recengine.Context-method-setCategory\" rel=\"econda.recengine.Context-method-setCategory\" class=\"docClass\">setCategory</a> for details.</p>\n</div><div class='long'><p>Category, see <a href=\"#!/api/econda.recengine.Context-method-setCategory\" rel=\"econda.recengine.Context-method-setCategory\" class=\"docClass\">setCategory</a> for details.</p>\n</div></div></div><div id='cfg-productIds' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.recengine.Context'>econda.recengine.Context</span><br/><a href='source/Context.html#econda-recengine-Context-cfg-productIds' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.recengine.Context-cfg-productIds' class='name not-expandable'>productIds</a><span> : String|Array</span></div><div class='description'><div class='short'><p>Array of product ids or String containing a single product id.</p>\n</div><div class='long'><p>Array of product ids or String containing a single product id.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-category' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.recengine.Context'>econda.recengine.Context</span><br/><a href='source/Context.html#econda-recengine-Context-property-category' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.recengine.Context-property-category' class='name not-expandable'>category</a><span> : <a href=\"#!/api/econda.recengine.ContextCategory\" rel=\"econda.recengine.ContextCategory\" class=\"docClass\">econda.recengine.ContextCategory</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'><p>Product category to get recommendations for</p>\n</div><div class='long'><p>Product category to get recommendations for</p>\n</div></div></div><div id='property-productIds' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.recengine.Context'>econda.recengine.Context</span><br/><a href='source/Context.html#econda-recengine-Context-property-productIds' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.recengine.Context-property-productIds' class='name not-expandable'>productIds</a><span> : Array</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'><p>Array of product ids</p>\n</div><div class='long'><p>Array of product ids</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-setCategory' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.recengine.Context'>econda.recengine.Context</span><br/><a href='source/Context.html#econda-recengine-Context-method-setCategory' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.recengine.Context-method-setCategory' class='name expandable'>setCategory</a>( <span class='pre'>category</span> ) : <a href=\"#!/api/econda.recengine.Context\" rel=\"econda.recengine.Context\" class=\"docClass\">econda.recengine.Context</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Set category, see econda.recengine.ContextCategory for details ...</div><div class='long'><p>Set category, see econda.recengine.ContextCategory for details</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>category</span> : Object|String|<a href=\"#!/api/econda.recengine.ContextCategory\" rel=\"econda.recengine.ContextCategory\" class=\"docClass\">econda.recengine.ContextCategory</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/econda.recengine.Context\" rel=\"econda.recengine.Context\" class=\"docClass\">econda.recengine.Context</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setProductIds' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.recengine.Context'>econda.recengine.Context</span><br/><a href='source/Context.html#econda-recengine-Context-method-setProductIds' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.recengine.Context-method-setProductIds' class='name expandable'>setProductIds</a>( <span class='pre'>productIds</span> ) : <a href=\"#!/api/econda.recengine.Context\" rel=\"econda.recengine.Context\" class=\"docClass\">econda.recengine.Context</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Array of string with product ids ...</div><div class='long'><p>Array of string with product ids</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>productIds</span> : Array|String<div class='sub-desc'><p>return {econda.recengine.Context}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/econda.recengine.Context\" rel=\"econda.recengine.Context\" class=\"docClass\">econda.recengine.Context</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>"});