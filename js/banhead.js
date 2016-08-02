var Head= React.createClass({
	render: function() {
		return 	<div className="container">
					<div className="logo pull-left"></div>
					<div className="headbar pull-left">
						<div className="top">中科氢氧</div>
						<div className="bot">CSHO TECH</div>
					</div>
					<nav className="navHead pull-left">
						
					</nav>
					<div className="search pull-left">
						<input type="search" placeholder="探索氢氧知识库" />
						<a href="http://192.168.20.116:3000"></a>
					</div>
			    </div>;
	}
});

ReactDOM.render(<Head/>,document.getElementsByClassName('header')[0]);