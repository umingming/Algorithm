package com.java.step04.no10952;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		�� ���� A�� B�� �Է� ���� ����, A+B�� ����ϴ� ���α׷��� �ۼ��Ͻÿ�.
		
		����>
		1. Scanner
		2. while��
			>next�� ��ū ���� �Է� �޾� integer�� ����ȯ�� a, b�� ����
			>if�� a, b�� 0?
				>break;
				>�ƴϸ� a+b ���
		 */
		
		Scanner scan = new Scanner(System.in);
		
		while(true) {
			int a = Integer.parseInt(scan.next());
			int b = Integer.parseInt(scan.next());
			
			if(a == 0 && b == 0) {
				break;
			} else {
				System.out.println(a+b);	
			}
		}
		
	}
}
