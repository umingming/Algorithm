package com.java.step05.no8958;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	public static void main(String[] args) throws NumberFormatException, IOException {
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
		
		BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
		int testCase = Integer.parseInt(reader.readLine());
		
		for(int i=0; i<testCase; i++) {
			int count = 0;
			int score = 0;
			
			for(byte answer : reader.readLine().getBytes()) {
				if(answer == 'O'){
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
