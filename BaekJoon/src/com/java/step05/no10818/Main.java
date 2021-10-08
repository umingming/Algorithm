package com.java.step05.no10818;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		최대 최소 구하기
		-첫째 줄에 정수의 개수가 주어짐
		-둘째 줄에 공백으로 구분한 정수들이 주어짐
		-n개의 정수들 중 최소, 최대 공백으로 구분해 출력
		
		설계>
		1. Scanner
		2. 배열의 길이를 입력 받음.
		3. 입력 받은 수를 길이로 하는 Integer 배열 선언함.
		4. 최소, 최대 변수 선언후 각각 정수형의 최대, 최소값으로 초기화
		5. for문 length 반복
			>배열의 요소에 nextInt로 입력 받은 값을 저장함
			>if문 max와 요소를 비교했을 때 요소가 크면 max에 값을 저장함.
			>if문 min과 요소를 비교했을 때 요소가 작으면 min에 값을 저장함.
		6. min과 max를 출력
		 */
		
		Scanner scan = new Scanner(System.in);
		int length = scan.nextInt();
		int[] nums = new int[length];
		
		int min = Integer.MAX_VALUE;
		int max = Integer.MIN_VALUE;
		
		for(int i=0; i<nums.length; i++) {
			nums[i] = scan.nextInt();
			
			if(min > nums[i]) {
				min = nums[i];
			}
			
			if(max < nums[i]) {
				max = nums[i];
			}
		}
		
		System.out.println(min + " " + max);

	}

}
