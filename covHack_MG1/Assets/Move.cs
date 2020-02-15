using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Move : MonoBehaviour
{

    private float moveSpeed = 100f;
    public Rigidbody2D body;
    private float moveX = 0f;
    private float moveY = 0f;

    private bool faceRight;
    private bool faceLeft;

    void Start()
    {
        faceRight = true;
        body = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame

    void Update()
    {
        moveX = Input.GetAxis("Horizontal") * moveSpeed;
        moveY = Input.GetAxis("Vertical") * moveSpeed;
        //GetAxis is smoother than GetAxisRaw
    }
    void FixedUpdate()
    {
        body.MovePosition(new Vector2(body.position.x + moveX * Time.deltaTime, transform.position.y + moveY * Time.deltaTime));


        Flip(moveX);
    }

    //flipping sprite to face direction of movement
    private void Flip(float moveHorizontal)
    {
        if (moveHorizontal > 0 && !faceRight || moveHorizontal < 0 && faceRight)
        {
            faceRight = !faceRight;
            transform.Rotate(0f, 180f, 0f);
        }
    }
}

