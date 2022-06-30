# monte carlo simulation of the coin betting problem:
#
# there are N coins, k of which are head-biased with probability p and the remaining
# are tail biased with probability p'. It's impossible to distinguish which is
# which
#
# 1. What's the optimal amount to bet on each coin to maximize expected return

import numpy as np

def bet(N,k,p,q,P):
    
    # randomly select k out of N coins to be the head ones
    a = np.full(k,1)
    b = np.full(N-k,0)
    A = np.concatenate((a,b))

    A = np.random.permutation(A)

    print(A)
