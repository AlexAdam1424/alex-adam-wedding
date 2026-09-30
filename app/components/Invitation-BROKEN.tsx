
930
931
932
933
934
935
936
937
938
939
940
941
942
943
944
945
946
947
948
949
950
951
952
953
954
955
956
957
958
959
960
961
962
963
964
965
966
967
968
969
970
971
972
973
974
975
976
977
978
979
980
981
982
983
984
985
986
987
988
989
990
991
992
993
994
995
996
997
998
999
1000
1001
1002
1003
1004
1005
1006
1007
1008
1009
1010
1011
1012
1013
1014
1015
1016
1017
1018
1019
1020
1021
1022
1023
1024
1025
1026
1027
1028
1029
"use client";
            <p className="text-[9px] uppercase tracking-[0.5em] text-[#8D6B52]">
              Our Honeymoon Fund
            </p>

            <h3 className="mt-4 font-heading text-3xl font-light italic text-[#30251F]">
              With love, Alex & Adam
            </h3>


            {/* QR */}

            <div className="mx-auto mt-7 flex aspect-square w-full max-w-[240px] items-center justify-center bg-white p-3">

              <img
                src="/images/honeymoon-qr-new.png"
                alt="QR code to contribute towards Alex and Adam's honeymoon"
                className="h-full w-full object-contain"
              />

            </div>


            <p className="mt-6 text-[9px] uppercase tracking-[0.35em] text-[#8D6B52]">
              Scan to contribute
            </p>

            <p className="mx-auto mt-3 max-w-[250px] text-xs leading-6 text-[#6B5C50]">
              Your contribution will go directly towards
              our honeymoon adventures.
            </p>

          </div>

        </div>

      </div>

    </div>


    {/* =================================================
        FOOTER MESSAGE
    ================================================= */}

    <div className="mt-20 border-t border-[#D6B47A]/15 pt-10 text-center">

      <p className="font-heading text-2xl italic text-[#E4C995]">
        Thank you for helping us make memories that will
        last a lifetime.
      </p>

      <p className="mt-4 text-[9px] uppercase tracking-[0.45em] text-[#8D7A69]">
        Con amore, Alex & Adam
      </p>

    </div>

  </div>

</section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#0D0B0A] px-8 py-24 text-center text-[#F4EFE5]">

        <p className="text-[10px] uppercase tracking-[0.55em] text-[#D6B47A]">
          Until we say I do
        </p>

        <p className="mt-7 font-heading text-2xl italic md:text-3xl">
          We can't wait to celebrate with you in Italy.
        </p>

        <p className="mt-8 font-heading text-3xl italic text-[#D6B47A]">
          Con amore, Alex & Adam
        </p>

        <div className="mx-auto mt-10 h-px w-16 bg-[#D6B47A]/60" />

        <p className="mt-8 text-xs uppercase tracking-[0.4em] text-[#8E8174]">
          28 April 2027 · Italy
        </p>

      </footer>


      {/* =====================================================
          RSVP MODAL
      ===================================================== */}

      {showRSVP && (
        <RSVPForm
          onClose={() => setShowRSVP(false)}
        />
      )}

    </div>
  );
}