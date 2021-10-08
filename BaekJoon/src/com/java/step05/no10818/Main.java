package com.java.step05.no10818;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		�ִ� �ּ� ���ϱ�
		-ù° �ٿ� ������ ������ �־���
		-��° �ٿ� �������� ������ �������� �־���
		-n���� ������ �� �ּ�, �ִ� �������� ������ ���
		
		����>
		1. Scanner
		2. �迭�� ���̸� �Է� ����.
		3. �Է� ���� ���� ���̷� �ϴ� Integer �迭 ������.
		4. �ּ�, �ִ� ���� ������ ���� �������� �ִ�, �ּҰ����� �ʱ�ȭ
		5. for�� length �ݺ�
			>�迭�� ��ҿ� nextInt�� �Է� ���� ���� ������
			>if�� max�� ��Ҹ� ������ �� ��Ұ� ũ�� max�� ���� ������.
			>if�� min�� ��Ҹ� ������ �� ��Ұ� ������ min�� ���� ������.
		6. min�� max�� ���
		 */
		
		Scanner scan = new Scanner(System.in);
		int length = scan.nextInt();
		int[] nums = new int[length];
		
		int min = Integer.MAX_VALUE;
		int max = Integer.MIN_VALUE;
		
		for(int i=0; i<nums.length; i++) {
			nums[i] = scan.nextInt();
			
			if(min > nums[i]) {
				min = nums[i];
			}
			
			if(max < nums[i]) {
				max = nums[i];
			}
		}
		
		System.out.println(min + " " + max);

	}

}
