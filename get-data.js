(function($) {
	$(document).ready(function() {
		list = ['BTC','ETH','BCH','ADA','BNB','DAI','DOGE','DOT','LINK','LTC','TRX','UNI','USDT','XLM','XMR','XRP','XTZ'];
		function getData(exchangeName) {
			$.ajax({
				url: `https://fullnode.ir/fee?exchange=${exchangeName}`,
				type: 'GET',
				success: function(res) {
					if( res ) {
						res = res[exchangeName];
						list.forEach(function( name ) {
							if( !$(`.${name}_row`).length ) {
								var row = `<tr class='${name}_row'>
								<td class="name">${name}</td>
								<td class="buy-price"></td>
								<td class="buy-vol"></td>
								<td class="sell-price"></td>
								<td class="sell-vol"></td>
								</tr>`;
								$(row).appendTo('.coins_wrap tbody');
							}
							$(`.${name}_row .buy-price`).text(res[name].buy.price);
							$(`.${name}_row .buy-vol`).text(res[name].buy.vol);
							$(`.${name}_row .sell-price`).text(res[name].sell.price);
							$(`.${name}_row .sell-vol`).text(res[name].sell.vol);
						});
					}
				}
			});
		}
		var exchangeName = 'exir';
		getData(exchangeName);
		setInterval(function(){ 
			getData(exchangeName);
		}, 5000);
	});
})(jQuery)