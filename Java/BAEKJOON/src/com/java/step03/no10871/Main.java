package com.java.step03.no10871;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		���� N���� �̷���� ���� A�� ���� X�� �־����� �� A���� X���� ���� ���� ��� ����Ͻÿ�.
		
		����>
		1. Scanner
		2. N, X �Է�
		3. lownum ���� ����
		4. for�� N �ݺ�
			>num �Է�
			>if��(num<X) lownum+=num
		5. lownum ���
		 */
		
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		int x = scan.nextInt();
		String lowNum = "";
		
		for(int i=0; i<n; i++) {
			int num = scan.nextInt();
			if(num < x) {
				lowNum += num + " ";
			}
		}
		
		System.out.println(lowNum);
	}
}
