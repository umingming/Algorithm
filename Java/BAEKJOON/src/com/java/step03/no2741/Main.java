package com.java.step03.no2741;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		�ڿ��� N�� �־����� �� 1���� N���� �� �ٿ� �ϳ��� ����ϴ� ���α׷��� �ۼ��Ͻÿ�.
		
		����>
		1. Scanner
		2. �ڿ��� �Է�
		3. for�� N �ݺ� >i���
		 */
		
		Scanner scan = new Scanner(System.in);
		int num = scan.nextInt();
		
		for(int i=1; i<=num; i++) {
			System.out.println(i);
		}
		
	}

}
