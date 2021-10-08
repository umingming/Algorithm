package com.java.step05.no2557;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		세 개의 자연수의 곱에 0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지 구하기
		
		설계>
		1. Scanner
		2. nextInt로 변수 a, b, c 입력 받기
		3. String으로 곱하기 변수 선언 후 a*b*c로 초기화
		4. 길이가 10인 int 변수 선언
		5. for문 곱하기 변수의 길이만큼
			>integer 변수 c 선언 후 곱하기 변수의 i번째 글자를 형변환해 초기화함.
			>배열의 i번째 요소++
		6. for문 배열의 길이 반복
			>각 요소 순서대로 출력
		 */
		
		Scanner scan = new Scanner(System.in);
		int a = scan.nextInt();
		int b = scan.nextInt();
		int c = scan.nextInt();
		String result = "" + (a * b * c);
		
		int[] nums = new int[10];
		
		for(int i=0; i<result.length(); i++) {
			int ch = Integer.parseInt(result.charAt(i) + "");
			nums[ch]++;
		}
		
		for(int i=0; i<nums.length; i++) {
			System.out.println(nums[i]);
		}
		
	}
}
