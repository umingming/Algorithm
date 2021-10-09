package com.java.step05.no8958;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		OX������ ����� �־����� �� ������ ���ϴ� ���α׷��� �ۼ��Ͻÿ�.
		-ù° �ٿ� �׽�Ʈ ���̽� �־���
		
		����>
		1. Scanner
		2. ���� �Է�
		3. count, score ���� ���� �� 0���� �ʱ�ȭ
		4. for�� �Է��� ���� �ݺ�
			>OX ��� �Է�
			>for�� �Է� ���� ����� ���� �ݺ�
				>if O/X? 
					>O�� count++, score+=count, X�� score�� 0 ����
			>score ��� 
		 */
		
		Scanner scan = new Scanner(System.in);
		
		int testCase = scan.nextInt();
		
		for(int i=0; i<testCase; i++) {
			String result = scan.next();
			int count = 0;
			int score = 0;
			
			for(byte answer : scan.next().getBytes()) {
				if(answer == 'O'){
					count++;
					score += count;
				} else {
					count = 0;
				}
			}
			for(int j=0; j<result.length(); j++) {
				char c = result.charAt(j);
				if(c == 'O') {
					count++;
					score += count;
				} else {
					count = 0;
				}
			}
			
			System.out.println(score);
		}
	}

}
