package com.java.step03;

import java.util.Scanner;

public class no2438 {

	public static void main(String[] args) {
		/*
		ù° �ٿ��� �� 1��, ��° �ٿ��� �� 2��, N��° �ٿ��� �� N��
		
		����>
		1. Scanner
		2. line �Է�
		3. for�� line �ݺ�
			>for�� i �ݺ� *���
			>����
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
