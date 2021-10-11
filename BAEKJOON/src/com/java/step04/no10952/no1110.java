package com.java.step04;

import java.util.Scanner;

public class no1110 {

	public static void main(String[] args) {
		/*
		����Ŭ�� ���̸� ���ϴ� ���α׷��� �ۼ��Ͻÿ�.
		-input�� 10���� ������ 0�� �ٿ� ���ڸ����� ����
		-1�� �ڸ� ���� ���ڸ��� ���� 1�� �ڸ� ���� �̾�ٿ� ���� ����
		-�� ���� ó���� ���� �Ǹ� ����
		
		����>
		1. Scanner
		2. ���� �Է��� integer ������ ����
		3. count, num ���� ���� �� 0, input���� �ʱ�ȭ
			>if�� num�� 10���� ������? *10
		4. while�� (num!=input && count != 0)
			>num = (num%10)*10 + (num/10 + num%10)%10
			>count ++
		5. count ���	
		 */
		
		Scanner scan = new Scanner(System.in);
		int input = scan.nextInt();
		int count = 0;
		int num = input;
		
		while(num != input || (num == input & count == 0)) {
			num = (num%10)*10 + (num/10 + num%10)%10;
			count++;
		}
		
		System.out.println(count);
	}

}
