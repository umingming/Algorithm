package com.java.step03;

import java.util.Scanner;

public class no2438 {

	public static void main(String[] args) {
		/*
		첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개
		
		설계>
		1. Scanner
		2. line 입력
		3. for문 line 반복
			>for문 i 반복 *출력
			>개행
		*/
		
		Scanner scan = new Scanner(System.in);
		int line = scan.nextInt();
		
		for(int i=0; i<line; i++) {
			for(int j=0; j<=i; j++) {
				System.out.print("*");
			}
			System.out.println();
		}
	}
}
