package com.java.step05.no2562;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		9개의 서로 다른 수가 주어지면 최대값을 찾고 몇 번째 수인자 구하라.
		
		설계>
		1. Scanner
		2. 길이가 9인 integer 배열 선언
		3. max, n 변수 선언후 0으로 초기화
		4. for문 배열 길이 반복
			>nextInt로 숫자 입력
			>if문 max보다 큰지?
				>max에 해당 요소의 값 저장
				>n에 i+1 저장함
		5. 결과 출력
		 */
		
		Scanner scan = new Scanner(System.in);
		
		int[] nums = new int[9];
		int max = 0; 
		int n = 0;
		
		for(int i=0; i<nums.length; i++) {
			nums[i] = scan.nextInt();
			
			if(nums[i] > max) {
				max = nums[i];
				n = i + 1; 
			}
		}
		
		System.out.println(max);
		System.out.println(n);
		
		

	}

}
