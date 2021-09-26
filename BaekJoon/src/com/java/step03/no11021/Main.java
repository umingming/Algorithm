package com.java.step03.no11021;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		두 정수 A와 B를 입력 받은 다음 A+B를 출력하는 프로그램을 작성하시오.
		
		설계>
		1. Scanner
		2. case 입력 받기
		3. for문 case 반복
			>숫자 a와 b를 입력
			>둘의 합을 출력함
		 */
		
		Scanner scan = new Scanner(System.in);
		int testCase = scan.nextInt();
		
		for(int i=1; i<=testCase; i++) {
			int a = scan.nextInt();
			int b = scan.nextInt();
			System.out.printf("Case #%d: %d%n", i, a + b);
		}
	}
}
