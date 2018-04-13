#MultiTapComponent -- ReactNative的点击组件，支持判断点击次数

原始需求是，我在一副图片上想要同时处理单击和双击。但是，看了许多网上的例子，没有发现简单可靠的判断双击的方法。后来，在StackOverflow上受到一位高手的启发，通过debounce来实现了单击和双击的区分。现在把它分享给大家。

