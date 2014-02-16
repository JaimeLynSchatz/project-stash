#some CUDA code to study
#include "cuda_runtime.h"
#include "device_launch_parameters.h"

#include <stdio.h>
#include <cutil.h>

// #define SUPPORT_ALPHA

__global__ void ImageSearch_kernel(float* BufferOut, float* BufferB, float* BufferS, unsigned int bw, unsigned int bh, unsigned int sw, unsigned int sh)
{
	unsigned int bx = threadIdx.x + blockIdx.x * blockDim.x;
	unsigned int by = threadIdx.y + blockIdx.y * blockDim.y;
	float diff = 0;
	for (unsigned int y = 0; y< sh; y++)
	{
		unsigned int as = (x + y * sw) * 4;
		unsigned int ab = (x + bx + (y +by) * bw) * 4;

	}
}

/*
What's not covered in the videos is the jump to grids with more than one block.

In the squaring and cubing quizzes we had just one block with a bunch of threads. And the array was one 1D. So everything was easy: you get the serial number of the thread from threadIdx.x and use it to directly access the array element with this number.

Here you need to introduce a grid with many blocks. So in the first step you decide how many threads per block you want. My suggestion is 16 or 32 (just so that you don't try 1024). Now each block is, say, 32x32. How many blocks will cover the whole picture? If the pic is numRows by numCols, you can calculate that.

OK, now you have all the numbers you need for the host part of the code, you have all dimensions, that's finished.

So to the kernel, which is the device part.

Here, unlike with cubes, you don't have just threadIdx.x. To begin with, it's now 2D, so you also have threadIdx.y. And these two numbers are just coordinates inside of a block. If your block is 32x32, then it's numbers from 0 to 31. You also have a block ID number, which is again two numbers, blockIdx.x and blockIdx.y, and you have a block size (which is 32 and 32 in your case, but there are separate vars for that, blockDim.x and blockDim.y).

Now with this mess of six actual parameters you need to figure out how to get the pixel coordinates from them. You know X and Y for the thread, you know X and Y for the block, and you know X and Y for a block size. They give you i and j — pixel coordinates.

And the final step is to realize that yes, it's a 2D pic, but they saved it inside a 1D array. So you need to translate your i and j to a single number that will point to the right location in the array. Remember that you know numCols and numRows.

And that's it.

*/

/*
 *
 *  Key thing to note:
 *  How to acceess which thread to work:
 *  i = blockIdx.x * blockDim.x + threadIdx.x
 */
    if (i<ARRAY_SIZE) {
 		d_out[i] = d_in[i] * d_in[i] d_in[i]
 	}
 	# or, rather, in our case:
 	i = blockIdx.x * blockDim.x + threadIdx.x
 	if (i<ARRAY_SIZE) {
 		d_out[i] = the formula for rgb averaged
 	}

 // Figuring out the grid size
 	//The old code for declaring block size:
 	const dim3 blockSize(3, 2, 1);

 	//The code for the grid size is trickier:
 	const dim3 gridSize(2, 1, 1);

 	const dim3 blockSize(3, 1, 1);
 	const dim3 gridSize(2, 1, 1);
 	cube<<<gridSize, blockSize>>>(d_out, d_in);

 	//In Problem Set 1, we are given variables 
 	//of the colsize and rowsize

 	//Depending on the size of our blocks, we then need to 
 	//decide how many blocks we will need to cover the entire size:
 	//Divide the num of rows by the grid size and you'll get it.

 	//Be careful, though, with int division: it will trunc any remainder.

 	const dim3 blockSize(some_number, some_number, 1);
 	const dim3 gridSize(some_expression, some_expression, 1);

 	int some_number = //we get to decide this, a multiple of 8
 	int some_expression = ((row_size % blockSize = 0) ? row_size/blockSize : row_size/blockSize + 1)

 // Once we have all that, we need this:

 	i = some_new_expression;
 	j = some_other_new_expression;
 	// i and j are the coordinates of the pixel we are transforming
 	if (check_i_and_j_for_validity) {
 		idx = expression_that_translates_i_and_j_to_array_index;
 		greyImage[idx] = RGB_transformation_stuff_based_on_rgbaImage;
	}