package com.java.step03.no2742;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		�ڿ��� N�� �־����� �� N���� 1���� �� �ٿ� �ϳ��� ����Ͻÿ�.
		
		����>
		1. Scanner
		2. ���� �Է�
		3. for�� N�ݺ� >N-i ���
		*/
		
		Scanner scan = new Scanner(System.in);
		int num = scan.nextInt();
		
		for(int i=0; i<num; i++) {
			System.out.println(num - i);
		}
	}
}
