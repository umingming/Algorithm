package com.java.step03.no11022;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		�� ���� A�� B�� �Է� ���� ����, A+B�� ����ϴ� ���α׷��� �ۼ��Ͻÿ�.
		-Case #x: A + B = C �������� ����Ѵ�.
		
		����>
		1. Scanner
		2. testCase �Է�
		3. for�� case �ݺ�
			>a, b �Է�
			>��� ���
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
