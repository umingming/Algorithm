package com.java.step03.no11022;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		두 정수 A와 B를 입력 받은 다음, A+B를 출력하는 프로그램을 작성하시오.
		-Case #x: A + B = C 형식으로 출력한다.
		
		설계>
		1. Scanner
		2. testCase 입력
		3. for문 case 반복
			>a, b 입력
			>결과 출력
		 */		
		
		Scanner scan = new Scanner(System.in);
		int testCase = scan.nextInt();
		
		for(int i=1; i<=testCase; i++) {
			int a = scan.nextInt();
			int b = scan.nextInt();
			
			System.out.printf("Case #%d: %d + %d = %d%n", i, a, b, a + b);
		}
	}
}
