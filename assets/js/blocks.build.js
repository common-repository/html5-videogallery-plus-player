!function(e){function l(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,l),r.l=!0,r.exports}var t={};l.m=e,l.c=t,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},l.p="",l(l.s=0)}([function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});t(1)},function(e,l,t){"use strict";var a=t(2),r=(t.n(a),t(3)),n=(t.n(r),t(4)),o=wp.i18n.__;(0,wp.blocks.registerBlockType)("wp-html5vp/video-grid",{title:o("Video Grid","html5-videogallery-plus-player"),description:o("Display video in grid view.","html5-videogallery-plus-player"),icon:"format-video",category:"essp_guten_block",keywords:[o("essential"),o("video grid","html5-videogallery-plus-player"),o("sp_html5video")],supports:{html:!1,multiple:!0},getEditWrapperProps:function(e){var l=e.align;if(["wide","full"].includes(l))return{"data-align":l,"data-block-type":"wp-html5vp-grid"}},edit:n.a,save:function(){return null}})},function(e,l){},function(e,l){},function(e,l,t){"use strict";function a(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function r(e,l){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||"object"!==typeof l&&"function"!==typeof l?e:l}function n(e,l){if("function"!==typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function, not "+typeof l);e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(e,l):e.__proto__=l)}var o=function(){function e(e,l){for(var t=0;t<l.length;t++){var a=l[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(l,t,a){return t&&e(l.prototype,t),a&&e(l,a),l}}(),p=wp.element,i=p.Component,s=p.Fragment,m=wp.components,u=m.PanelBody,d=m.TextControl,c=m.Disabled,y=m.ToggleControl,g=m.RangeControl,h=m.SelectControl,v=(m.ColorPalette,m.BaseControl,wp.i18n.__),w=(wp.data.select,wp.blockEditor),f=w.InspectorControls,b=w.BlockControls,E=w.BlockAlignmentToolbar,_=function(e){function l(){a(this,l);var e=r(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments));return e.state={isLoading:!1},e}return n(l,e),o(l,[{key:"ObjToString",value:function(e){var l=wp.blocks.getBlockAttributes("wp-html5vp/video-grid"),t=["content_tail"],a="";for(var r in e)e.hasOwnProperty(r)&&"undefined"!==typeof e[r]&&e[r]!==l[r]&&(""!=jQuery.trim(e[r])||jQuery.inArray(r,t)>=0)&&(a+=r+'="'+e[r]+'" ');return a}},{key:"GetBooleanDropdown",value:function(){return[{value:"true",label:v("True","html5-videogallery-plus-player")},{value:"false",label:v("False","html5-videogallery-plus-player")}]}},{key:"GetDesigns",value:function(){return[{value:"design-1",label:v("Design 1","html5-videogallery-plus-player")}]}},{key:"GetLinkTargetDropdown",value:function(){return[{value:"self",label:v("Same Window","html5-videogallery-plus-player")}]}},{key:"GetPostOrderby",value:function(){return[{value:"date",label:v("Post Date","html5-videogallery-plus-player")},{value:"modified",label:v("Post Modified Date","html5-videogallery-plus-player")},{value:"title",label:v("Post Title","html5-videogallery-plus-player")},{value:"name",label:v("Post Slug","html5-videogallery-plus-player")},{value:"author",label:v("Post Author","html5-videogallery-plus-player")},{value:"ID",label:v("Post ID","html5-videogallery-plus-player")},{value:"rand",label:v("Random","html5-videogallery-plus-player")}]}},{key:"GetPostOrder",value:function(){return[{value:"desc",label:v("Descending","html5-videogallery-plus-player")},{value:"asc",label:v("Ascending","html5-videogallery-plus-player")}]}},{key:"GetPaginationType",value:function(){return[{value:"numeric",label:v("Numeric Pagination","html5-videogallery-plus-player")},{value:"prev-next",label:v("Previous - Next Pagination","html5-videogallery-plus-player")}]}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){e.attributes}},{key:"render",value:function(){var e=this.props,l=e.attributes,t=e.setAttributes,a=l.align,r=(l.className,l.grid),n=l.popup_fix,o=l.limit,p=l.category,i=l.post,m=(this.state.isLoading,wp.element.createElement(f,null,wp.element.createElement(u,{title:v("General Parameters","html5-videogallery-plus-player")},wp.element.createElement(c,null,wp.element.createElement(h,{label:v("Design","html5-videogallery-plus-player"),options:this.GetDesigns(),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},v("Select design. Upgrade to","html5-videogallery-plus-player")," ",wp.element.createElement("a",{href:WP_Html5Vp_Block.pro_link,target:"_blank"},v("Premium version ","html5-videogallery-plus-player")),v("to get this option.","html5-videogallery-plus-player"))})),wp.element.createElement(g,{label:v("Number of Columns","html5-videogallery-plus-player"),value:r,onChange:function(e){return t({grid:e})},min:1,max:4,help:v("Select number of column per row.","html5-videogallery-plus-player")}),wp.element.createElement(c,null,wp.element.createElement(y,{label:v("Show Title","html5-videogallery-plus-player"),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},v("Display title. Upgrade to","html5-videogallery-plus-player")," ",wp.element.createElement("a",{href:WP_Html5Vp_Block.pro_link,target:"_blank"},v("Premium version ","html5-videogallery-plus-player")),v("to get this option.","html5-videogallery-plus-player"))})),wp.element.createElement(c,null,wp.element.createElement(y,{label:v("Show Content","html5-videogallery-plus-player"),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},v("Display content. Upgrade to","html5-videogallery-plus-player")," ",wp.element.createElement("a",{href:WP_Html5Vp_Block.pro_link,target:"_blank"},v("Premium version ","html5-videogallery-plus-player")),v("to get this option.","html5-videogallery-plus-player"))})),wp.element.createElement(h,{label:v("Popup Fix","html5-videogallery-plus-player"),value:n,options:this.GetBooleanDropdown(),onChange:function(e){return t({popup_fix:e})},help:v("Set popup scroll fix with screen.","html5-videogallery-plus-player")}),wp.element.createElement(c,null,wp.element.createElement(y,{label:v("Enable Gallery View","html5-videogallery-plus-player"),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},v("Enable navigation arrows on video popup as gallery view. Upgrade to","html5-videogallery-plus-player")," ",wp.element.createElement("a",{href:WP_Html5Vp_Block.pro_link,target:"_blank"},v("Premium version ","html5-videogallery-plus-player")),v("to get this option.","html5-videogallery-plus-player"))})),wp.element.createElement(c,null,wp.element.createElement(d,{label:v("Media size","html5-videogallery-plus-player"),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},v("Choose WordPress registered image size. e.g thumbnail, medium, large, full. Upgrade to","html5-videogallery-plus-player")," ",wp.element.createElement("a",{href:WP_Html5Vp_Block.pro_link,target:"_blank"},v("Premium version ","html5-videogallery-plus-player")),v("to get this option.","html5-videogallery-plus-player"))}))),wp.element.createElement(u,{title:v("Query Parameters","html5-videogallery-plus-player"),initialOpen:!1},wp.element.createElement(g,{label:v("Total Items","html5-videogallery-plus-player"),value:o,onChange:function(e){return t({limit:e})},min:-1,max:1e3,help:v("Enter number of video post to be displayed. Enter -1 to display all.","html5-videogallery-plus-player")}),wp.element.createElement(c,null,wp.element.createElement(h,{label:v("Order By","html5-videogallery-plus-player"),options:this.GetPostOrderby(),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},v("Select order type. Upgrade to","html5-videogallery-plus-player")," ",wp.element.createElement("a",{href:WP_Html5Vp_Block.pro_link,target:"_blank"},v("Premium version ","html5-videogallery-plus-player")),v("to get this option.","html5-videogallery-plus-player"))})),wp.element.createElement(c,null,wp.element.createElement(h,{label:v("Order","html5-videogallery-plus-player"),options:this.GetPostOrder(),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},v("Select sorting order. Upgrade to","html5-videogallery-plus-player")," ",wp.element.createElement("a",{href:WP_Html5Vp_Block.pro_link,target:"_blank"},v("Premium version ","html5-videogallery-plus-player")),v("to get this option.","html5-videogallery-plus-player"))})),wp.element.createElement(d,{label:v("Display Post of Specific Category","html5-videogallery-plus-player"),value:p,onChange:function(e){return t({category:e})},help:wp.element.createElement("span",{title:v("You can pass multiple ids with comma seperated. You can find id at relevant category listing page.","html5-videogallery-plus-player")},v("Enter category id to display categories wise.","html5-videogallery-plus-player")," [?]")}),wp.element.createElement(c,null,wp.element.createElement(h,{label:v("Include Child Category Post","html5-videogallery-plus-player"),options:this.GetBooleanDropdown(),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},v("If you are using parent category then whether to display child category team member or not. Upgrade to","html5-videogallery-plus-player")," ",wp.element.createElement("a",{href:WP_Html5Vp_Block.pro_link,target:"_blank"},v("Premium version ","html5-videogallery-plus-player")),v("to get this option.","html5-videogallery-plus-player"))})),wp.element.createElement(c,null,wp.element.createElement(d,{label:v("Exclude Category","html5-videogallery-plus-player"),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},v("Exclude post category. Works only if `Category` field is empty. You can pass multiple ids with comma seperated. You can find id at relevant category listing page. Upgrade to","html5-videogallery-plus-player")," ",wp.element.createElement("a",{href:WP_Html5Vp_Block.pro_link,target:"_blank"},v("Premium version ","html5-videogallery-plus-player")),v("to get this option.","html5-videogallery-plus-player"))})),wp.element.createElement(d,{label:v("Display Specific Posts","html5-videogallery-plus-player"),value:i,onChange:function(e){return t({post:e})},help:wp.element.createElement("span",{title:v("You can pass multiple ids with comma seperated. You can find id at relevant post listing page.","html5-videogallery-plus-player")},v("Enter id of the post which you want to display.","html5-videogallery-plus-player")," [?]")}),wp.element.createElement(c,null,wp.element.createElement(d,{label:v("Exclude Specific Posts","html5-videogallery-plus-player"),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},v("Enter id of the post which you do not want to display. You can pass multiple ids with comma seperated. You can find id at relevant post listing page. Upgrade to","html5-videogallery-plus-player")," ",wp.element.createElement("a",{href:WP_Html5Vp_Block.pro_link,target:"_blank"},v("Premium version ","html5-videogallery-plus-player")),v("to get this option.","html5-videogallery-plus-player"))})),wp.element.createElement(c,null,wp.element.createElement(h,{label:v("Pagination","html5-videogallery-plus-player"),options:this.GetBooleanDropdown(),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},v("Display pagination. Upgrade to","html5-videogallery-plus-player")," ",wp.element.createElement("a",{href:WP_Html5Vp_Block.pro_link,target:"_blank"},v("Premium version ","html5-videogallery-plus-player")),v("to get this option.","html5-videogallery-plus-player"))})),wp.element.createElement(c,null,wp.element.createElement(h,{label:v("Pagination Type","html5-videogallery-plus-player"),options:this.GetPaginationType(),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},v("Display pagination type. Upgrade to","html5-videogallery-plus-player")," ",wp.element.createElement("a",{href:WP_Html5Vp_Block.pro_link,target:"_blank"},v("Premium version ","html5-videogallery-plus-player")),v("to get this option.","html5-videogallery-plus-player"))})),wp.element.createElement(c,null,wp.element.createElement(g,{label:v("Query Offset","html5-videogallery-plus-player"),min:0,max:100,help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},v("Exclude number of posts from starting. e.g if you pass 5 then it will skip first five post. Note: Do not use limit=-1 and pagination=true with this. Upgrade to","html5-videogallery-plus-player")," ",wp.element.createElement("a",{href:WP_Html5Vp_Block.pro_link,target:"_blank"},v("Premium version ","html5-videogallery-plus-player")),v("to get this option.","html5-videogallery-plus-player"))})))));return wp.element.createElement(s,null,m,wp.element.createElement(b,null,wp.element.createElement(E,{value:a,onChange:function(e){return t({align:e})},controls:["wide","full"]})),wp.element.createElement("div",{className:this.props.className},this.renderOutput()))}},{key:"renderOutput",value:function(){var e=this.props.attributes,l=this.ObjToString(e);l=l.trim();var t=l?"[sp_html5video "+l+"]":"[sp_html5video]";return wp.element.createElement("div",{className:"wpos-pro-guten-shrt"},wp.element.createElement("div",{className:"wpos-pro-guten-shrt-title"},wp.element.createElement("span",null,v("Video gallery and Player - Grid","html5-videogallery-plus-player"))),t,wp.element.createElement("div",{className:"wpos-guten-shrt-footer"},wp.element.createElement("span",null),v("Do you want to check demo of this plugin.","html5-videogallery-plus-player")," ",wp.element.createElement("a",{href:WP_Html5Vp_Block.free_demo_link,target:"_blank"},v("Click here","html5-videogallery-plus-player"))),wp.element.createElement("div",{className:"wpos-guten-shrt-footer"},v("Do you also want to check premium version demo of this plugin.","html5-videogallery-plus-player")," ",wp.element.createElement("a",{href:WP_Html5Vp_Block.pro_demo_link,target:"_blank"},v("Click here","html5-videogallery-plus-player"))))}}]),l}(i);l.a=_}]);