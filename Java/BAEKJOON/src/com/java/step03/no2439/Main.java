package com.java.step03.no2439;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		ù° �ٿ��� �� 1��, ��° �ٿ��� �� 2��, N��° �ٿ��� �� N���� �����ÿ�.
		-�������� �������� ������ �� ���
		
		����>
		1. Scanner
		2. line �Է�
		3. for�� line �ݺ�
			>for�� line-i-1 �ݺ� ���� ���
			>for�� i �ݺ� * ���
			>����
		 */
		
		Scanner scan = new Scanner(System.in);
		int line = scan.nextInt();
		
		for(int i=0; i<line; i++) {
			for(int j=0; j<line-1-i; j++) {
				System.out.print(" ");
			}
			
			for(int j=0; j<=i; j++) {
				System.out.print("*");
			}
			
			System.out.println();
		}
	}
}
