(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(441)}])},9677:function(i,d,a){"use strict";a.d(d,{Z:function(){return u}});var j=a(1438),k=a(8029),l=a(1224),m=a(5893),b=a(7294),e=a(9008),n=a.n(e),o=a(9569),p=a(5225),f=a(1664),q=a.n(f),r=JSON.parse('[{"title":"\u041A\u0430\u0442\u0430\u043B\u043E\u0433","href":"/"}]'),g=function(b){(0,k.Z)(a,b);var c=(0,l.Z)(a);function a(){return(0,j.Z)(this,a),c.apply(this,arguments)}return a.prototype.render=function(){var a=this.props.cartProductsCount;return(0,m.jsx)("header",{className:"header",children:(0,m.jsxs)("div",{className:"container flex",children:[(0,m.jsx)(q(),{href:"/",children:(0,m.jsx)("h1",{className:"header__title",children:"Online Store"})}),(0,m.jsx)("nav",{className:"header__nav",children:(0,m.jsx)("ul",{className:"list header__menu",children:r.map(function(a,b){return(0,m.jsx)("li",{className:"header__menu-item",children:(0,m.jsx)(q(),{href:a.href,children:(0,m.jsx)("a",{className:"button button-fill",children:a.title})})},b)})})}),(0,m.jsx)("div",{className:"header__cart","data-count":a,children:(0,m.jsx)(q(),{href:"/cart",children:(0,m.jsx)("a",{className:"button button-outline",children:"\u041A\u043E\u0440\u0437\u0438\u043D\u0430"})})})]})})},a}(b.Component),s=g,h=function(b){(0,k.Z)(a,b);var c=(0,l.Z)(a);function a(){return(0,j.Z)(this,a),c.apply(this,arguments)}return a.prototype.render=function(){return(0,m.jsx)("footer",{className:"footer",children:(0,m.jsx)("div",{className:"container flex",children:(0,m.jsx)("nav",{children:(0,m.jsx)(q(),{href:"/",children:(0,m.jsx)("h1",{className:"footer__title",children:"Online Store"})})})})})},a}(b.Component),t=h,c=function(c){(0,k.Z)(a,c);var d=(0,l.Z)(a);function a(){return(0,j.Z)(this,a),d.apply(this,arguments)}var b=a.prototype;return b.renderHead=function(){return(0,m.jsxs)(n(),{children:[(0,m.jsx)("title",{children:"Create Next App"}),(0,m.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,m.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})},b.render=function(a){var b=this.props.cart.products;return(0,m.jsxs)("div",{className:"page-wrapper",children:[this.renderHead(),(0,m.jsx)(s,{cartProductsCount:b.length||0}),a,(0,m.jsx)(t,{})]})},a}(b.Component);c.mapStateToProps=function(a){return{cart:a.cart}},c.mapDispatchToProps=function(a){var b={addToCart:p.Xq,removeFromCart:p.h2,emptyCart:p.UY};return(0,o.DE)(b,a)};var u=c},7987:function(e,c,a){"use strict";var f=a(5893),g=a(7294),d=a(6064),h=a(1163),i=a(139),b=a(9677);c.Z=(0,d.$j)(b.Z.mapStateToProps,b.Z.mapDispatchToProps)(function(a){var b=a.data,e=a.cart,j=a.isCart,k=a.addToCart,l=a.removeFromCart,m=(0,h.useRouter)(),c=(0,g.useMemo)(function(){return(0,i.Z)(b.price)},[b.price]),d=e.products.some(function(a){return a.id===b.id});return j?(0,f.jsxs)("div",{className:"product",children:[(0,f.jsx)("img",{src:b.image,className:"product__image"}),(0,f.jsx)("span",{className:"product__name",children:b.name}),(0,f.jsxs)("span",{className:"product__price",children:[c," \u20BD"]}),(0,f.jsx)("div",{className:"product__actions",children:(0,f.jsx)("button",{className:"button button-outline",onClick:function(){return l(b)},children:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C"})})]}):(0,f.jsxs)("div",{className:"product",children:[(0,f.jsx)("img",{className:"product__image",src:b.image}),(0,f.jsxs)("div",{className:"product__info",children:[(0,f.jsxs)("span",{className:"product__price product__info-item",children:[c," \u20BD"]}),(0,f.jsx)("span",{className:"product__name product__info-item",children:b.name}),(0,f.jsx)("button",{className:"button ".concat(d?"button-outline":"button-fill"," product__info-item"),onClick:function(){return d?m.push("/cart"):k(b)},children:d?"\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"})]})]})})},441:function(g,b,a){"use strict";a.r(b),a.d(b,{Index:function(){return f},"__N_SSG":function(){return o}});var h=a(1438),i=a(5785),j=a(2662),k=a(8029),l=a(1224),m=a(5893);a(7294);var d=a(6064),e=a(1163),c=a(9677),n=a(7987),o=!0,f=function(b){(0,k.Z)(a,b);var c=(0,l.Z)(a);function a(){return(0,h.Z)(this,a),c.apply(this,arguments)}return a.prototype.render=function(){var b=this.props.products;return(0,i.Z)((0,j.Z)(a.prototype),"render",this).call(this,(0,m.jsx)("main",{className:"container",children:(0,m.jsxs)("section",{className:"catalog",children:[(0,m.jsx)("h1",{className:"title catalog__title",children:"\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0442\u043E\u0432\u0430\u0440\u043E\u0432"}),(0,m.jsx)("div",{className:"catalog__list",children:b.map(function(a,b){return(0,m.jsx)(n.Z,{data:a},b)})})]})}))},a}(c.Z);b.default=(0,d.$j)(c.Z.mapStateToProps,c.Z.mapDispatchToProps)((0,e.withRouter)(f))},139:function(b,a){"use strict";a.Z=function(a){return a.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}}},function(a){a.O(0,[670,774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])