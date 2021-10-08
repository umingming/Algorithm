package com.java.step05.no2562;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		9���� ���� �ٸ� ���� �־����� �ִ밪�� ã�� �� ��° ������ ���϶�.
		
		����>
		1. Scanner
		2. ���̰� 9�� integer �迭 ����
		3. max, n ���� ������ 0���� �ʱ�ȭ
		4. for�� �迭 ���� �ݺ�
			>nextInt�� ���� �Է�
			>if�� max���� ū��?
				>max�� �ش� ����� �� ����
				>n�� i+1 ������
		5. ��� ���
		 */
		
		Scanner scan = new Scanner(System.in);
		
		int[] nums = new int[9];
		int max = 0; 
		int n = 0;
		
		for(int i=0; i<nums.length; i++) {
			nums[i] = scan.nextInt();
			
			if(nums[i] > max) {
				max = nums[i];
				n = i + 1; 
			}
		}
		
		System.out.println(max);
		System.out.println(n);
		
		

	}

}
