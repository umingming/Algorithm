package com.java.step03.no11021;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		�� ���� A�� B�� �Է� ���� ���� A+B�� ����ϴ� ���α׷��� �ۼ��Ͻÿ�.
		
		����>
		1. Scanner
		2. case �Է� �ޱ�
		3. for�� case �ݺ�
			>���� a�� b�� �Է�
			>���� ���� �����
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
