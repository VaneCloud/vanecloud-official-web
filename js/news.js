
			var names = ['国际动态', '行业动态', '氢氧动态','新品发布'];

			var News=React.createClass({
				render:function(){
					return (
						<ul>
							{
								names.map(function (name) {
									return <li><a href="javascript:">{name}</a></li>
								})
							}
						</ul>
					)
				}
			})

		ReactDOM.render(<News></News>,document.getElementById('news'));


