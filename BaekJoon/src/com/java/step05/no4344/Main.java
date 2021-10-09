package com.java.step05.no4344;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		����� �Ѵ� �л����� ������ ����Ͻÿ�.
		-������ ����, �л��� ��, �� ������
		
		����>
		1. Scanner
		2. ���� �� �Է�
		3. �Է� ���� ���� ���̷� �ϴ� integer �迭 ����
		4. for�� �迭 ����
			>�л� �� �Է�
			>�л� ���� ���̷� �ϴ� �迭 ����
			>sum, avg, count ���� ����
			>for�� �л� ��
				>���� �Է�
				>sum�� �߰���
			>avg ���
			>for�� �л� ��
				>if�� ������ avg���� ū��? count++
			>count/�л� �迭�� ���� printf�� �����.
		 */
		
		Scanner scan = new Scanner(System.in);
		
		int test = scan.nextInt();
		
		for(int i=0; i<test; i++) {
			int student = scan.nextInt();
			int[] scores = new int[student];
			int sum = 0;
			double avg = 0;
			int count = 0;
			
			for(int j=0; j<scores.length; j++) {
				scores[j] = scan.nextInt();
				sum += scores[j];
			}
			
			avg = (double)sum / scores.length;
			
			for(int j=0; j<scores.length; j++) {
				if(scores[j] > avg) {
					count++;
				}
			}
			
			System.out.printf("%.3f%%", count / scores.length);
			
		}

	}

}
