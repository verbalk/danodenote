
$(function() {	
	$('.text-input').jqxInput({theme : "classic"});
	$("#search_input").jqxInput({placeHolder : " 검색"});
	$("#board_div").jqxExpander({ theme : "classic", width: '920px', height: '570px' });
	$("#search_button").jqxButton({ width: '80' });
	if ($("#new_writing_button").length > 0) {
		$("#new_writing_button").jqxButton({ width: '80' });
	}

	$("#letter_list").on('rowclick', function(event) {
		var args = event.args;
		var index = args.rowindex;
		var data = $('#letter_list').jqxGrid('getrowdata', index);
		location.href = "/letter_detail?letter_id="+data.letter_id;		
	});
	
	getLetterList();
});



function getLetterList() {
	$('#letter_list').jqxGrid('showloadelement'); // 로딩중
	
	var title = $("#search_input").val();
	
	var url = "/get_qna_letter_list";
	

	var posting = $.post(url, {type:"qna", title: title});
	
	posting.done(function(letter_list) {
		var source = {
			localdata : letter_list,
			datatype : "array",
			pagesize: 13,
			datafields : [{
				name : 'letter_id',
				type : 'string'
			}, {
				name : 'group_name',
				type : 'string'
			}, {
				name : 'user_position',
				type : 'string'
			}, {
				name : 'user_name',
				type : 'string'
			}, {
				name : 'letter_title',
				type : 'string'
			}, {
				name : 'create_date',
				type : 'date'
			} ]
		};
		updateLetterList(source);
	});
}

function updateLetterList(source) {
	$("#letter_list").jqxGrid({
		theme : "classic", 
		source : source,
		columnsresize : true,
		width : 900,
		autoheight: true,
		sortable: true,
		pageable : true,
		enabletooltips: true,
		pagermode: "simple",
		columns : [ {
			cellsalign: 'center',
			text : '글번호',
			dataField : 'letter_id',
			width : 90
		}, {
			cellsalign: 'center',
			text : '게시자 이름',
			dataField : 'user_name',
			width : 100,
		}, {
			cellsalign: 'center',
			text : '직책',
			dataField : 'user_position',
			width : 100
		}, {
			cellsalign: 'center',
			text : '소속',
			dataField : 'group_name',
			width : 120
		}, {
			cellsalign: 'center',
			text : '제목',
			dataField : 'letter_title',
		}, {
			cellsalign: 'center',
			text : '생성시간',
			dataField : 'create_date',
			width : 150,
			cellsformat : 'yyyy-MM-dd HH-mm-ss',
		}]});
	$('#letter_list').jqxGrid('sortby', 'create_date', 'desc');
	$('#letter_list').jqxGrid('hideloadelement'); // 로딩끝
}
