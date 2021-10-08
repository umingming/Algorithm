package com.java.step05;

import java.util.Scanner;

public class no3052 {

	public static void main(String[] args) {
		/*
		숫자 10개를 입력 받고 42로 나눈 나머지중 서로 다른 값이 몇 개 있는지 출력하시오.
		
		설계>
		1. Scanner
		2. 길이가 10인 integer 배열 생성
		3. count변수 선언
		4. for문 배열의 길이 반복
			>i번째 요소에 입력 받은 숫자를 42로 나눈 값 저장
			>논리형으로 중복확인 변수 선언 후 false로 초기화
			>for문 i-1반복
				>if분 i번째와 j번째 요소가 같은지?
					>논리 변수 true로 저장
			>if문 중복이 아니면? count++
		5. 결과 출력
		 */
		
		Scanner scan = new Scanner(System.in);
		int[] nums = new int[10];
		int count = 0;
		
		for(int i=0; i<nums.length; i++) {
			nums[i] = (scan.nextInt()) % 42;
			boolean isDuplicate = false;
			
			for(int j=0; j<i; j++) {
				if(nums[i] == nums[j]) {
					isDuplicate = true;
				}
			}
			
			if(!isDuplicate) {
				count++;
			}
		}
		
		System.out.println(count);
	}

}
