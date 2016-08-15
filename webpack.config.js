var path = require('path'); // NodeJS中的Path对象，用于处理目录的对象，提高开发效率。
var Webpack = require('webpack');

//模块导入
module.exports = {
	//指入口文件的配置项，它是一个数组的原因是webpack允许多个入口点。 如果只有一个入口，也可以直接使用双引号"./src/main"
	entry: ["./src/main"],
	//配置打包结果，path定义了输出的文件夹，filename则定义了打包结果文件的名称
	output: {
		path: path.join(__dirname, './dist'), //文件地址，使用绝对路径形式
		filename: "[name].js", //[name]这里是webpack提供的根据路口文件自动生成的名字
		publicPath: '/dist/' // 公共文件生成的地址
	},

	//服务器配置相关，自动刷新
	devServer: {
		historyApiFallback: true,
		hot: false,
		inline: true,
		grogress: true,
	},

	/*定义了对模块的处理逻辑，这里可以用loaders定义了一系列的加载器，以及一些正则。当需要加载的文件匹配test的正则时，
	就会调用后面的loader对文件进行处理，这正是webpack强大的原因。*/
	module: {
		//加载器配置
		loaders: [
			//解析.vue文件
			{ test: /\.vue$/, loader: 'vue'},
			//转化ES6语法
			{ test: /\.js$/, loader: 'babel', exclude: /node_modules/},
			//解析css并自动添加css前缀
			{ test: /\.css$/, loader: "style!css!autoprefixer" },
			//.scss 文件想要编译，scss就需要这些东西！来编译处理
        	//install css-loader style-loader sass-loader node-sass --save-dev
        	{ test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
        	// 图片转化，小于8K自动转化为base64的编码,在大小限制后可以加上&name=./[name].[ext]，会将我们的文件生成在设定的文件夹下。
			{ test: /\.(png|jpg)$/, loader: "url-loader?limit=8192" },
    		//html模板编译
            { test: /\.(html|tpl)$/, loader: 'html-loader' },
		]
	},

	//.vue的配置,需要单独出来配置
	vue: {
		loaders: {
			css: "style!css!autoprefixer",
		}
	},
	//转化成ES5语法
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	}

	resolve: {
		//require时省略的扩展名
		extensions: ['', '.js', '.vue'],
		//别名,可以直接使用别名来代替设定的路径及其他
		alias: {
			filter: path.join(__dirname, './src/filters'),
			components: path.join(__dirname, './src/components')
		}
	},

	//开启sourve-map
	devtool: "eval-source-map",

	//插件配置
	plugins: [
		new Webpack.BannerPlugin("这里是打包文件头部注释!") //注意这是一个数组
	]
}