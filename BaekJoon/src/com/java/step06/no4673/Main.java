package com.java.step06.no4673;

public class Main {

	public static void main(String[] args) {
		/*
		셀프 넘버 출력
		-양의 정수 n에 대해 n과 각 자리수를 더하는 함수를 d(n)이라고 함
		-n은 d(n)의 생성자
		-생성자가 없는 숫자가 셀프 넘버
		-10000보다 크지 않음.
		
		설계>
		1. 길이가 10000인 boolean 배열 선언
		2. for문 10000 반복
			>notSelfNum 변수 선언 후 i로 초기화
			>for문 i의 길이 반복
				>nsn 변수에 j번째에 해당하는 수 추가함.
			>배열의 nsn-1번째 요소를 true로 저장함.
		3. for문 10000 반복
			>if 배열의 요소를 조건식으로 i+1출력함 
		 */
		
		boolean[] notSelfNums = new boolean[10000];
		
		for(int i=1; i<=10000; i++) {
			int notSelfNum = i;
			int tmp = i;
			while(tmp != 0){
				notSelfNum += (tmp % 10); 
				tmp = tmp / 10;	
			}
			
			if(notSelfNum - 1 < 10000) {
				notSelfNums[notSelfNum - 1] = true;
			}
		}
		
		for(int i=0; i<10000; i++) {
			if(!notSelfNums[i]) {
				System.out.println(i + 1);
			}
		}
	}
}
