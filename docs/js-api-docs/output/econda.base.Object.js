Ext.data.JsonP.econda_base_Object({"tagname":"class","name":"econda.base.Object","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"private":true},"private":true,"id":"class-econda.base.Object","members":{"cfg":[],"property":[{"name":"__p","tagname":"property","owner":"econda.base.Object","meta":{"private":true},"id":"property-__p"}],"method":[{"name":"getSetterName","tagname":"method","owner":"econda.base.Object","meta":{"private":true},"id":"method-getSetterName"},{"name":"processConfig","tagname":"method","owner":"econda.base.Object","meta":{"private":true},"id":"method-processConfig"},{"name":"set","tagname":"method","owner":"econda.base.Object","meta":{"chainable":true},"id":"method-set"},{"name":"setup","tagname":"method","owner":"econda.base.Object","meta":{"private":true},"id":"method-setup"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":9,"files":[{"filename":"Object.js","href":"Object.html#econda-base-Object"}],"html_meta":{"private":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":["econda.media.Category","econda.media.Content","econda.media.helper.HtmlAudioTracker","econda.media.helper.HtmlVideoTracker","econda.media.helper.JwPlayerTracker","econda.media.helper.YouTubeTracker","econda.media.MediaTracker"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/econda.media.Category' rel='econda.media.Category' class='docClass'>econda.media.Category</a></div><div class='dependency'><a href='#!/api/econda.media.Content' rel='econda.media.Content' class='docClass'>econda.media.Content</a></div><div class='dependency'><a href='#!/api/econda.media.MediaTracker' rel='econda.media.MediaTracker' class='docClass'>econda.media.MediaTracker</a></div><div class='dependency'><a href='#!/api/econda.media.helper.HtmlAudioTracker' rel='econda.media.helper.HtmlAudioTracker' class='docClass'>econda.media.helper.HtmlAudioTracker</a></div><div class='dependency'><a href='#!/api/econda.media.helper.HtmlVideoTracker' rel='econda.media.helper.HtmlVideoTracker' class='docClass'>econda.media.helper.HtmlVideoTracker</a></div><div class='dependency'><a href='#!/api/econda.media.helper.JwPlayerTracker' rel='econda.media.helper.JwPlayerTracker' class='docClass'>econda.media.helper.JwPlayerTracker</a></div><div class='dependency'><a href='#!/api/econda.media.helper.YouTubeTracker' rel='econda.media.helper.YouTubeTracker' class='docClass'>econda.media.helper.YouTubeTracker</a></div><h4>Files</h4><div class='dependency'><a href='source/Object.html#econda-base-Object' target='_blank'>Object.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p><p>Base Object providing some common support for configs, standard set/get method.\nDo not use this object directly, it's a base class for other objects. {econda.base.Object}</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-__p' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.base.Object'>econda.base.Object</span><br/><a href='source/Object.html#econda-base-Object-property-__p' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.base.Object-property-__p' class='name not-expandable'>__p</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'><p>We assign private properties for extending objects here\nSee this.setup().</p>\n</div><div class='long'><p>We assign private properties for extending objects here\nSee this.setup().</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getSetterName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.base.Object'>econda.base.Object</span><br/><a href='source/Object.html#econda-base-Object-method-getSetterName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.base.Object-method-getSetterName' class='name expandable'>getSetterName</a>( <span class='pre'>propertyName</span> ) : String<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Converts property names to setter function names\nmyProperty => setMyProperty ...</div><div class='long'><p>Converts property names to setter function names\nmyProperty => setMyProperty</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>propertyName</span> : String<div class='sub-desc'><p>Name of class property</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Name of setter function for given property</p>\n</div></li></ul></div></div></div><div id='method-processConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.base.Object'>econda.base.Object</span><br/><a href='source/Object.html#econda-base-Object-method-processConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.base.Object-method-processConfig' class='name expandable'>processConfig</a>( <span class='pre'>cfg</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Handles config options that we got in a constructor. ...</div><div class='long'><p>Handles config options that we got in a constructor.\nConfig options might be an instance of the given object, a config object or\nthe value of standard property.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : Number/String/Object<div class='sub-desc'><p>Constructor value</p>\n</div></li></ul></div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.base.Object'>econda.base.Object</span><br/><a href='source/Object.html#econda-base-Object-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.base.Object-method-set' class='name expandable'>set</a>( <span class='pre'>cnf, [newValue]</span> ) : <a href=\"#!/api/econda.base.Object\" rel=\"econda.base.Object\" class=\"docClass\">econda.base.Object</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Set multiple properties. ...</div><div class='long'><p>Set multiple properties.</p>\n\n<p>Example:</p>\n\n<pre><code>// set multiple properties\nobj.set({\n    propertyName: newValue,\n    property2: newValue2\n});\n\n// set single property\n// you should use obj.setPropertyName(newValue) instead\nobj.set(\"propertyName\", newValue);\n\n// set default property\nobj.set(newValue);\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cnf</span> : Object/String<div class='sub-desc'><p>Object containing multiple properties and values or name of property</p>\n</div></li><li><span class='pre'>newValue</span> : Mixed (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/econda.base.Object\" rel=\"econda.base.Object\" class=\"docClass\">econda.base.Object</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.base.Object'>econda.base.Object</span><br/><a href='source/Object.html#econda-base-Object-method-setup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.base.Object-method-setup' class='name expandable'>setup</a>( <span class='pre'>cfg, privateProperties</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Private setup function. ...</div><div class='long'><p>Private setup function. Handles setup of config and some additional things</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>privateProperties</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});