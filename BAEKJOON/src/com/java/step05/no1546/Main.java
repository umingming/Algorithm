package com.java.step05.no1546;

import java.util.Arrays;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		��� ����/�ִ밪 * 100���� ���ο� ��� ���ϱ�
		
		����>
		1. Scanner
		2. ���� �Է� �ޱ�
		3. �Է� ���� ������ ���̷� �ϴ� int �迭 ����
		4. sum�� avg ���� ����
		5. for�� �迭�� ����
			>��ҿ� ���� �Է� ����
		6. �迭 ����
		7. for�� �迭�� ����
			>����� ��/�ִ� ��*100���� ����
			>sum�� ����� �� ������.
		8. avg�� sum/�迭�� ���̷� �ʱ�ȭ��.
		9. avg���
		 */
		
		Scanner scan = new Scanner(System.in);
		int length = scan.nextInt();
		
		int[] scores = new int[length];
		double sum = 0;
		int max = 0;
		double avg;
		for(int i=0; i<scores.length; i++) {
			scores[i] = scan.nextInt();
			
			max = Math.max(scores[i], max);
		}
		
		System.out.println(max);
		
//		Arrays.sort(scores);
//		for(int i=0; i<scores.length; i++) {
//			scores[i] = scores[i] * 100 / scores[scores.length-1];
//			sum += scores[i];
//		}
//		
//		avg = sum / scores.length;
//		
//		System.out.println(avg);
	}

}
