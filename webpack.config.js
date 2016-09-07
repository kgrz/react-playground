module.exports = {
	entry: './app.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: 'style!css' },
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'react-hot'
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015'],
					plugins: [['add-module-exports', {'loose': true}], 'transform-class-properties', 'transform-object-rest-spread']
				}
			},
		]
	}
}
