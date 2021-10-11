package com.java.step07.no2675;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		문자열을 입력 받은 후에 각 문자를 반복해 새문자열로 출력하는 프로그램 작성하시오.
		-첫째 줄에 테스트 케이스 개스가 주어짐.
		-둘째 줄에는 반복 횟수와 문자열의 주어짐.
		
		설계>
		1. Scanner
		2. 테스트케이스 입력
		3. for문 테스트케이스 반복
			>반복횟수 입력
			>문자열 입력
			>for문 문자열 길이
				>for문 반복횟수
					>문자 출력
		 */
		
		
		Scanner scan = new Scanner(System.in);
		int t = scan.nextInt();
		
		for(int i=0; i<t; i++) {
			int r = scan.nextInt();
			String s = scan.nextLine().trim();
			for(int j=0; j<s.length(); j++) {
				for(int k=0; k<r; k++) {
					System.out.print(s.charAt(j));
				}
			}
			System.out.println();
		}
	}
}
