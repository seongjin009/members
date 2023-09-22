/*
promise 객체
객체에 담겨있는 데이터의 상태값을 가지고 있는
pending : 대기
fullfiled : 성공적으로 작업의 수행이 완료된 상태
rejected : 작업의 요청이 거절된 상태

작업시간이 오래걸리는 업무를 수행할 때 프로미스로 반환하면
해당 작업완료이후 동기적으로 다음 작업을 선형화해서 수행 (ess)
*/
fetch('DB/department.json')
	.then((data) => {
		//이전 메서드에 반환된 프로미스가 fullfiled 상태일때 실행
		console.log(data);
		const result = data.json();
		result.then((json) => {
			console.log(json);
		});
	})
	.catch((err) => {
		//이저ㄴ메서드에서 반환된 프로미스가 rejected 상테일 때 실행
		console.log(err);
	});
