package com.java.step05.no2557;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		�� ���� �ڿ����� ���� 0���� 9���� ������ ���ڰ� �� ���� �������� ���ϱ�
		
		����>
		1. Scanner
		2. nextInt�� ���� a, b, c �Է� �ޱ�
		3. String���� ���ϱ� ���� ���� �� a*b*c�� �ʱ�ȭ
		4. ���̰� 10�� int ���� ����
		5. for�� ���ϱ� ������ ���̸�ŭ
			>integer ���� c ���� �� ���ϱ� ������ i��° ���ڸ� ����ȯ�� �ʱ�ȭ��.
			>�迭�� i��° ���++
		6. for�� �迭�� ���� �ݺ�
			>�� ��� ������� ���
		 */
		
		Scanner scan = new Scanner(System.in);
		int a = scan.nextInt();
		int b = scan.nextInt();
		int c = scan.nextInt();
		String result = "" + (a * b * c);
		
		int[] nums = new int[10];
		
		for(int i=0; i<result.length(); i++) {
			int ch = Integer.parseInt(result.charAt(i) + "");
			nums[ch]++;
		}
		
		for(int i=0; i<nums.length; i++) {
			System.out.println(nums[i]);
		}
		
	}
}
